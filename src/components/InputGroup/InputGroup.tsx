import React, { ChangeEvent, useRef } from 'react';
import { InputGroupContainer } from './InputGroup.styled';
import DownloadRoundedIcon from '@mui/icons-material/DownloadRounded';
import { generateFile } from '../../utils/downloadFile';
import { validateData } from '../../utils/validatePhoneData';
import { phoneData } from '../../types/phoneData';
import { COLORS } from '../../utils/colors';
import { DeleteRounded } from '@mui/icons-material';

type Props = {
    isDownloadEnabled: boolean
    alldata: phoneData[],
    setData: Function,
    index: number
}

function InputGroup({isDownloadEnabled, alldata, setData, index}: Props) {
    const dddRef = useRef<HTMLInputElement>(null)
    const headRef = useRef<HTMLInputElement>(null)

    const handleRemove = () => {
        const tempData = [...alldata]
        tempData[index].ddd = ""
        tempData[index].head = ""
        tempData[index].valid = false
        
        setData(tempData)
        validateFields("ddd", false)
        validateFields("head", false)
    }

    const handleSubmit = () => {
        if (alldata[index].valid)
            generateFile(alldata[index].ddd, alldata[index].head);
        else
            console.error(`Evento: campos inválidos na linha ${index}. \n"DDD" deve ter 2 numeros e "Cabeça" deve conter 5`)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        const tempData = [...alldata];
        
        // @ts-ignore
        tempData[index][name] = value
        const isValidDDD = validateData(tempData[index].ddd, 2)
        const isValidHead = validateData(tempData[index].head, 5)
        tempData[index].valid = isValidDDD && isValidHead
        setData(tempData)

        validateFields(name, name === "ddd" ? isValidDDD : isValidHead)
    }

    const validateFields = (name: string, isValid: boolean) => {
        if (name === "ddd" && dddRef.current) {
            dddRef.current.style.borderColor = isValid ? COLORS.success : COLORS.error;
        }

        if (name === "head" && headRef.current)    
            headRef.current.style.borderColor = isValid ? COLORS.success : COLORS.error;
    }

    return <InputGroupContainer>
        <div>
            <label htmlFor="ddd">DDD</label>
            <input
                ref={dddRef}
                type="number"
                name="ddd"
                onChange={e => handleChange(e)}
                min="01"
                max="99"
                value={alldata[index].ddd}/>
        </div>

        <div>
            <label htmlFor="head">Cabeça</label>
            <input 
                type="number"
                name="head"
                onChange={e => handleChange(e)}
                ref={headRef}
                value={alldata[index].head}/>
        </div>

        <button onClick={() => handleRemove()}> <DeleteRounded /> </button>
        { isDownloadEnabled && <button onClick={() => handleSubmit()}> <DownloadRoundedIcon /> </button> }
    </InputGroupContainer>
}

export default InputGroup;