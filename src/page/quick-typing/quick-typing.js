import React, { useRef, useState } from 'react'
import Keyboard from 'react-simple-keyboard';
import { converInputTocky, convertInputTockyRight } from '../../convert/utils-rules.js'

import 'react-simple-keyboard/build/css/index.css';
import "./quick-typing.scss"

const getTockyValid = (tocky) => {
  return converInputTocky(tocky)
}

const keyboardRight = [
  ['s', 'k', 'r', 'n', 'h', '*', 'w', 'j', 'n', 't'],
  ['t', 'p', 'h', 'n', 's', 'i', 'y', 'j', 'g', 'k'],
  ['u', 'o', 'e', 'a']
]

export default function QuickTyping() {
  const [tocky, setTocky] = useState("")
  const [tockyValid, setTockyValid] = useState("")
  const typingTimeoutRef = useRef(null);
  const [dangGo, setDangGo] = useState('')
  const [tockyDanggo, setTockyDango] = useState("")

  const [isSwitched, setSwitched] = useState(false);
  const [layoutName, setLayoutName] = useState('default');

  const handleChangeTocky = (e) => {
    let value = e.target.value;
    value = value[value.length - 1]

    let newDangGo = dangGo + value

    let characterTockyDango = convertInputTockyRight(newDangGo)
    let time = new Date();
    let timeFormat = `${time.getHours()}:${time.getMinutes()}:${time.getMilliseconds()}`
    setTockyDango(timeFormat + "  " + characterTockyDango + `\n` + tockyDanggo)
    setDangGo(newDangGo)


    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      let newTockyValid = getTockyValid(newDangGo);
      if (newTockyValid) setTockyValid(tockyValid + ' ' + newTockyValid)
      setDangGo('')
    }, 1000)

    setTocky('');
  }

  const onKeyPress = button => {
    /**
     * Shift functionality
     */
    if (button === "{shift}") handleShift();
  };

  const handleShift = () => {
    setLayoutName(layoutName === 'default' ? 'shift' : 'default');
  };

  const column1 = (
    <div className="custom-column column1">
      <label htmlFor>Văn bản:</label>
      <textarea id="write" rows={6} cols={60} onChange={handleChangeTocky} value={tockyValid + tocky} defaultValue={""} />
      <Keyboard
        layoutName={layoutName}
        onKeyPress={button => onKeyPress(button)}
        layout={{
          shift: [
            "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
            "{tab} q w e r t y u i o p [ ] \\",
            "{lock} a s d f g h j k l ; ' {enter}",
            "{shift} z x c v b n m , . / {shift}",
            ".com @ {space}"
          ],
          default: [
            "~ ! @ # $ % ^ & ( ) _ + {bksp}",
            "{tab} S K R N H y * W J N T { }",
            '{lock} T P H N S h I Y J G K {enter}',
            "{shift} z x U O b E A < > ? {shift}",
            ".com @ {space}"
          ]
        }}
        buttonTheme={[
          {
            class: "hg-red",
            buttons: "S K R N H * W J N T P H N S I Y J G K U O E A"
          },
        ]} />
    </div>
  )

  const column2 = (
    <div className="custom-column column2">
      <label htmlFor>Nội dung tốc ký:</label>
      <textarea
        placeholder="Lưu ý: Tắt phần mềm hỗ trợ gõ tiếng Việt khi sử dụng"
        id="write2"
        rows={6}
        cols={60}
        value={tockyDanggo} />
      <div id="keyboard2">
        {keyboardRight.map((subKeyboard, idx) => (
          <div>
            {subKeyboard.map(n => <li key={n} className="letter2">{n}</li>)}
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="quick-typing-content">
      {!isSwitched ? column1 : column2}

      <div className="switch-btn" onClick={() => setSwitched(!isSwitched)}>
        <i class="fa fa-refresh" aria-hidden="true"></i>
      </div>

      {!isSwitched ? column2 : column1}
    </div>
  )

}
