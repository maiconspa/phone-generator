import { useState } from "react"
import InputGroup from "../../components/InputGroup/InputGroup"
import { HomeContainer, InputArea, OptionsArea } from "./Home.styled"
import Switch from "../../components/Switch/Switch";
import { downloadFile, getBigString } from "../../utils/downloadFile";
import { DeleteSweepRounded, AddRounded } from "@mui/icons-material";
import { phoneData } from "../../types/phoneData";

const mock: phoneData = {
  ddd: "",
  head: "",
  valid: false
}

export function Home() {
  const [inputData, setInputData] = useState([{ ...mock }])
  const [switchState, setSwitchState] = useState(false)

  const bulkGenerate = () => {
    let bulkText: string = "";
    let firstNumber: string = "";
    let lastNumber: string = "";

    inputData.forEach((data) => {
      if (data.valid) {
        if (!firstNumber) {
          firstNumber = data.ddd + data.head
        }
        lastNumber = data.ddd + data.head
        bulkText += getBigString(data.ddd, data.head) + "\n";
      }
    })

    const fileName: string = (firstNumber === lastNumber) ? firstNumber : `${firstNumber} -- ${lastNumber}`;

    downloadFile(bulkText, fileName)
  }

  return <HomeContainer>
    <h2>Gerador de Celular</h2>

    <OptionsArea>
      <div>
        <button onClick={() => setInputData(prev => [...prev, { ...mock }])} >
          <AddRounded /> Adicionar campo
        </button>

        <button onClick={() => setInputData(prev => [{ ...mock }])} >
          <DeleteSweepRounded /> Limpar
        </button>
      </div>

      <div>
        <Switch switchState={switchState} setSwitchState={setSwitchState} />
      </div>
    </OptionsArea>

    <InputArea>
      {inputData.map((data, index) =>
        <InputGroup
          isDownloadEnabled={!switchState}
          key={"aa" + index}
          alldata={inputData}
          setData={setInputData}
          index={index} />)}

    </InputArea>

    {switchState && <button onClick={() => bulkGenerate()}>Gerar todos</button>}

    <div id="result">
      <span>
      </span>
    </div>
  </HomeContainer>
}