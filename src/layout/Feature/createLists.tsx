import 'bootstrap/dist/css/bootstrap.min.css';
import TopToolbar from './components/topToolbar';
import TitleList from './components/titleList';
import AddItemInput from './components/addItemInput';
import MobileMenu from './components/mobileMenu';
import { useState, useEffect, useCallback } from "react";
import jsPDF from 'jspdf';
export default function CreateLists() {
  const [value, setValue] = useState('');
  const [items, setItems] = useState<string[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [textColor, setTextColor] = useState('text-dark');
  const [alignText, setAlignText] = useState('text-start');
  const [fontText, setFontText] = useState('');
  const [background, setBackground] = useState('');
  const [textSize, setTextSize] = useState(20);
  const [title, setTitle] = useState('');
  const [reference, setReference] = useState(false);
  const [valueTitle, setValueTitle] = useState('');
  const [lastAddedIndex, setLastAddedIndex] = useState<number | null>(null);
  const [clearingAll, setClearingAll] = useState(false);
  const [deleteLastTick, setDeleteLastTick] = useState(0);
  
  useEffect(() => {
    const savedTextColor = localStorage.getItem('textColor');
    const savedAlignText = localStorage.getItem('alignText');
    const savedFontText = localStorage.getItem('fontText');
    const savedTextSize = localStorage.getItem('textSize');
    if (savedTextColor) setTextColor(savedTextColor);
    if (savedAlignText) setAlignText(savedAlignText);
    if (savedFontText) setFontText(savedFontText);
    if (savedTextSize) setTextSize(Number(savedTextSize));
  }, []);
  useEffect(() => {
    localStorage.setItem('textColor', textColor);
    localStorage.setItem('alignText', alignText);
    localStorage.setItem('fontText', fontText);
    localStorage.setItem('textSize', String(textSize));
  }, [textColor, alignText, fontText, textSize]);
  const handleInput = (e: any) => {
    setValue(e.target.value);
  };
  const insertItem = useCallback(() => {
    if (!value.trim()) return;
    setItems(prev => {
      const updated = [...prev, value.trim()];
      setLastAddedIndex(prev.length);
      return updated;
    });
    setValue('');
  }, [value]);
  const clearAllItems = useCallback(() => {
    if (items.length === 0) return;
    setClearingAll(true);
  }, [items.length]);
  const onClearAllDone = useCallback(() => {
    setItems([]);
    setLastAddedIndex(null);
    setClearingAll(false);
  }, []);
  const deleteItem = (indexToDelete: number) => {
    setItems(prev => prev.filter((_, index) => index !== indexToDelete));
  };
  const startEdit = (index: number) => {
    setEditingIndex(index);
    setValue(items[index]);
  };
  const saveEdit = useCallback(() => {
    if (editingIndex === null) return;
    setItems(prev =>
      prev.map((item, index) =>
        index === editingIndex ? value.trim() : item
      )
    );
    setEditingIndex(null);
    setValue('');
  }, [editingIndex, value]);
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key !== 'Enter') return;
      if (editingIndex !== null) {
        saveEdit();
      } else {
        insertItem();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [editingIndex, insertItem, saveEdit]);
  useEffect(() => {
    const handleDeleteKey = (e: KeyboardEvent) => {
      if (e.key !== 'Delete') return;
      if (editingIndex !== null) return;
      if (items.length === 0) return;
      setDeleteLastTick((v) => v + 1);
    };
    window.addEventListener('keydown', handleDeleteKey);
    return () => window.removeEventListener('keydown', handleDeleteKey);
  }, [editingIndex, items.length]);
  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const pageHeight = doc.internal.pageSize.getHeight();
    if (background) {
      doc.addImage(background, 'JPEG', 0, 0, pageWidth, pageHeight);
    }
    const applyTextColor = () => {
      const colors: Record<string, [number, number, number]> = {
        'text-danger': [255, 0, 0],
        'text-success': [0, 255, 0],
        'text-warning': [255, 255, 0],
        'text-primary': [0, 0, 139],
        'text-purple': [128, 0, 128],
      };
      const rgb = colors[textColor] || [0, 0, 0];
      doc.setTextColor(...rgb);
    };
    applyTextColor();
    doc.setFontSize(textSize);
    if (title) {
      doc.text(title, pageWidth / 2, 15, { align: 'center' });
    }
    items.forEach((item, index) => {
      const yPos = 30 + index * (textSize < 50 ? 15 : 25);
      const alignOption =
        alignText === 'text-center'
          ? 'center'
          : alignText === 'text-end'
          ? 'right'
          : 'left';
      const xPos =
        alignOption === 'center'
          ? pageWidth / 2
          : alignOption === 'right'
          ? pageWidth - 20
          : 20;
      doc.text(item, xPos, yPos, { align: alignOption as any });
    });
    doc.save('lista-de-itens.pdf');
  };
  const changeSize = (event: any) => {
    const newSize = Number(event.target.value);
    if (newSize > 0 && newSize <= 50) {
      setTextSize(newSize);
    }
  };
  const changeBackground = (event: any) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => setBackground((e as any).target.result);
    reader.readAsDataURL(file);
  };
  return (
    <>
      <hr />
      <TopToolbar
        changeColor={setTextColor}
        changeSize={changeSize}
        changeFont={setFontText}
        changeAlign={setAlignText}
        changeBackground={changeBackground}
        generatePDF={generatePDF}
        textSize={textSize}
        fontText={fontText}
        alignText={alignText}
        textColor={textColor}
      />
      <div className="container-fluid">
        <div>
            <MobileMenu
              textColor={textColor}
              textSize={textSize}
              fontText={fontText}
              changeColor={setTextColor}
              setTextSize={setTextSize}
              changeFont={setFontText}
              changeAlign={setAlignText}
              changeBackground={changeBackground}
              generatePDF={generatePDF}
            />
          <section className="col-12 col-sm-8 col-md-9 col-lg-10 p-2 w-100 mt-3">
            <TitleList
              background={background}
              reference={reference}
              valueTitle={valueTitle}
              setValueTitle={setValueTitle}
              setTitle={setTitle}
              setReference={setReference}
              textColor={textColor}
              title={title}
              items={items}
              editingIndex={editingIndex}
              value={value}
              handleInput={handleInput}
              startEdit={startEdit}
              saveEdit={saveEdit}
              deleteItem={deleteItem}
              fontText={fontText}
              textSize={textSize}
              alignText={alignText}
              lastAddedIndex={lastAddedIndex}
              clearAddedIndex={() => setLastAddedIndex(null)}
              clearingAll={clearingAll}
              onClearAllDone={onClearAllDone}
              deleteLastTick={deleteLastTick}
            />
            <AddItemInput
              value={value}
              handleInput={handleInput}
              insertItem={insertItem}
              clearAll={clearAllItems}
            />
          </section>
        </div>
      </div>
    </>
  );
}
