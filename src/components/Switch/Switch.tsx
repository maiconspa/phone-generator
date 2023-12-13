import { Slider, SwitchContainer, SwitchWrapper } from "./Switch.styled";

interface Props {
    switchState: boolean
    setSwitchState: Function
}

function Switch({ switchState, setSwitchState }: Props) {

    const handleToggle = () => {
        setSwitchState(!switchState)
    };

    return (
        <SwitchContainer>
            <p>Gerar:</p>
            <div>
                1 a 1
                <SwitchWrapper>
                    <input type="checkbox" checked={switchState} onChange={handleToggle} />
                    <Slider />
                </SwitchWrapper>
                todos
            </div>
        </SwitchContainer>
    );
};

export default Switch;