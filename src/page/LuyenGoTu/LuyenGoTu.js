import React, { useState, useEffect, useRef } from 'react'
import { Button } from 'reactstrap'
import Countdown, { formatTimeDelta } from 'react-countdown';
import { firstSyllable, lastSyllable, mainSyllable, convertTocky, convertInputTockyRight } from './../../convert/utils-rules.js'
import { TuTiengViet } from './TiengViet.js'
var ketqua = new Array();
var showketqua = new Array();
let fired = false;
export default function LuyenGoTu() {
    const [tocKyEnter, setTockyEnter] = useState("");
    const [convertedText, setConvertedText] = useState("");
    const [count, setCount] = useState(0);
    const [randomWord, setRandomWord] = useState("");
    const [isTimeOut, setIsTimeOut] = useState(false)
    const [valueInput, setValueInput] = useState("")
    const [date, setDate] = useState(Date.now() + 60000)
    const [running, setRunning] = useState(true)
    const [wrong, setWrong] = useState(0)
    const [correct, setCorrect] = useState(0)

    const clockRef = useRef();
    const handleStart = () => clockRef.current.start();
    const handlePause = () => clockRef.current.pause();


    function handleChange(e) {
        let value = e.target.value;
        setValueInput(value)
        let tmp = convertInputTockyRight(value)
        setTockyEnter(tmp)
        console.log(tmp)
    }
    function handleEnter(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            let numberRandomWord = Math.floor(Math.random() * 500)
            let tmp = TuTiengViet[numberRandomWord]
            setRandomWord(tmp)
            let result = tmp.trim().split(' ').map((word) => convertTocky(word)).join(' ')
            setConvertedText(result)
            if (running) {
                ketqua.push([tmp, result])
                ketqua[count].push(tocKyEnter)
                setCount(count + 1)
                setValueInput("")
            }
            else {
                setRunning(true)
                setIsTimeOut(false)
                ketqua.splice(0, ketqua.length - 1)
                ketqua.push([tmp, result])
                ketqua[count].push(tocKyEnter)
                setCount(count + 1)
                setValueInput("")
            }

        }
    }

    function handleStartCountDown(e) {
        if (!fired) {
            fired = true
            handleStart()
        }
    }

    function handleClear(e) {
        setDate(Date.now() + 60000)
        handlePause()
        setIsTimeOut(false)
        fired = false
        setRunning(false)
        ketqua.splice(0, ketqua.length)
        setCount(0)
        let numberRandomWord = Math.floor(Math.random() * 500)
        let tmp = TuTiengViet[numberRandomWord]
        setRandomWord(tmp)
        let result = tmp.trim().split(' ').map((word) => convertTocky(word)).join(' ')
        setConvertedText(result)
        ketqua.push([tmp, result])

    }
    function handleStop() {
        setDate(Date.now() + 60000)
        handlePause()
        // ketqua.pop()
        showketqua = [...ketqua]
        showketqua.pop()
        var countWrong = 0
        var countCorrect = 0
        for (let i = 0; i < showketqua.length; i++) {
            if (showketqua[i][1].replaceAll("-", "") !== showketqua[i][2]) {
                countWrong++
            }
            else { countCorrect++ }
        }
        setWrong(countWrong)
        setCorrect(countCorrect)
        setIsTimeOut(true)
        fired = false
        setRunning(false)
        setCount(0)
    }

    useEffect(() => {
        let numberRandomWord = Math.floor(Math.random() * 500)
        let tmp = TuTiengViet[numberRandomWord]
        setRandomWord(tmp)
        let result = tmp.trim().split(' ').map((word) => convertTocky(word)).join(' ')
        setConvertedText(result)
        ketqua.push([tmp, result])

    }, []);

    return (
        <div style={{ width: "100%" }}>
            <div className="row">
                <div className="col-sm-6">
                    <h2 style={{ marginBottom: '40px', display: 'inline-block' }}>Luyện gõ từ</h2><div style={{ display: 'inline-block', marginLeft: '20px' }}>( Ấn ENTER để gõ từ tiếp theo )</div>
                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>Từ mẫu &ensp;&ensp;&ensp;&ensp;
                        <textarea onChange={handleChange} value={randomWord} style={{ paddingLeft: '10px', marginRight: '10px' }} ></textarea>
                        <Button style={{ height: '36px', marginLeft: '2px', width: "120px", fontWeight: '600', paddingRight: '5px' }} color="warning"><Countdown zeroPadTime={2} zeroPadDays={1} autoStart={false} onComplete={handleStop} ref={clockRef} date={date} /></Button>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>Gõ vào đây&ensp;
                        <textarea value={valueInput} onKeyDown={handleStartCountDown} onKeyPress={handleEnter} onChange={handleChange} style={{ paddingLeft: '10px' }}></textarea>
                        <Button color="success" style={{ height: '35px', marginLeft: '13px', width: "55px" }} onClick={handleClear} ><i style={{ fontSize: '16px' }} className="fas fa-sync-alt"></i></Button>
                        <Button color="danger" style={{ height: '35px', marginLeft: '10px', width: '55px' }} onClick={handleStop}><i style={{ fontSize: '19px' }} className="far fa-stop-circle"></i></Button>
                    </div>
                </div>
                {isTimeOut === true && <div className="col-sm-6" style={{ display: "flex", alignItems: 'flex-end' }}>
                    <div className="row" style={{ width: '100%' }}>
                        <div className="col-sm-4">Tổng số:{showketqua.length}</div>
                        <div className="col-sm-3">Đúng:{correct}</div>
                        <div className="col-sm-4">Sai:{wrong}</div>
                    </div>
                </div>}
            </div>
            {isTimeOut === true && <div className="row" style={{ marginTop: '50px', borderTop: "1px solid rgba(0,0,0,.1)" }}>
                <div className="col-sm-4" style={{ borderRight: "1px solid rgba(0,0,0,.1)", height: '30px', borderBottom: "1px solid rgba(0,0,0,.1)", paddingTop: '4px' }}>Từ mẫu</div>
                <div className="col-sm-4" style={{ borderRight: "1px solid rgba(0,0,0,.1)", height: '30px', borderBottom: "1px solid rgba(0,0,0,.1)", paddingTop: '4px' }}>Đáp án đúng</div>
                <div className="col-sm-4" style={{ borderBottom: "1px solid rgba(0,0,0,.1)", height: '30px', paddingTop: '4px' }} >Đáp án của bạn</div>
                {showketqua.map((item, index) => (
                    <>
                        <div className="col-sm-4" style={{ borderRight: "1px solid rgba(0,0,0,.1)", height: '20px' }}>{item[0]}</div>
                        <div className="col-sm-4" style={{ borderRight: "1px solid rgba(0,0,0,.1)", height: '20px' }}>{item[1]}</div>
                        <div className="col-sm-4" style={{ height: '20px' }} >{item[2]}</div>
                    </>
                ))}
            </div>}
        </div>
    )
}
