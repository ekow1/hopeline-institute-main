import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import CallToAction from "../component/sections/CallToAction.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/CallToAction">
                <CallToAction/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews