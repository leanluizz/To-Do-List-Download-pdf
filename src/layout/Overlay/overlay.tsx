import Button from '../../components/ui/button/button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import { OverlayProps } from '../../types';

function PopoverPositionedExample({ svg, content, title }: OverlayProps) {
  return (
    <>
      {['bottom'].map((placement) => (
        <OverlayTrigger
          trigger="click"
          rootClose
          key={placement}
          placement={placement as any}
          container={document.body}
          popperConfig={{
            strategy: 'fixed',
            modifiers: [
              { name: 'offset', options: { offset: [0, 8] } },
              { name: 'preventOverflow', options: { boundary: 'viewport' } },
              { name: 'flip', enabled: true },
            ],
          }}
          overlay={
            <Popover id={`popover-positioned-${placement}`}>
              <Popover.Header as="h3">{title}</Popover.Header>
              <Popover.Body>{content}</Popover.Body>
            </Popover>
          }
        >
          <Button variant="light">{svg}</Button>
        </OverlayTrigger>
      ))}
    </>
  );
}

export default PopoverPositionedExample;
