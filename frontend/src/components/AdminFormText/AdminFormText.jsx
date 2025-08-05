import SunEditor from "suneditor-react";
import "suneditor/dist/css/suneditor.min.css";

const AdminFormText = ({ value }) => {
    return (
        <SunEditor
            defaultValue={ value }
            setOptions={{
                height: 300,
                buttonList: [
                    ['undo', 'redo'],
                    ['formatBlock', 'fontSize'],
                    ['bold', 'italic', 'underline', 'strike'],
                    ['fontColor', 'hiliteColor'],
                    ['align', 'list'],
                    ['link', 'image', 'video'],
                    ['codeView', 'fullScreen'],
                ],
            }}
        />
    );
}

export default AdminFormText;