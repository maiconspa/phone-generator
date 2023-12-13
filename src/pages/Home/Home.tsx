import { useState } from "react"
import InputGroup from "../../components/InputGroup/InputGroup"
import { HomeContainer, InputArea, OptionsArea } from "./Home.styled"
import Switch from "../../components/Switch/Switch";
import { generateFile } from "../../utils/downloadFile";
import { DeleteSweepRounded , AddRounded } from "@mui/icons-material";
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
    inputData.forEach((data) => {
      if (data.valid)
        generateFile(data.ddd, data.head);
    })
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