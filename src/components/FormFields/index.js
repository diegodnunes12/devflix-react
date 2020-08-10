import React from 'react';
import ProtoTypes from 'prop-types'

function FormFields({label, type, name, valor, onChange}) {
    const fieldId = `id_${name}`

    return (
        <div>
            <label htmlFor={fieldId}>
            {label}:
            <input id={fieldId} type={type} name={name} value={valor} onChange={onChange} 
            />
            </label>
        </div>
    )
}

FormFields.defaultProps = {
    type: 'text'
}

FormFields.protoTypes = {
    label: ProtoTypes.string.isRequired, 
    type: ProtoTypes.string,
    /* name: ProtoTypes.string.isRequired,  
    valor: ProtoTypes.string.isRequired, 
    onChange: ProtoTypes.string.isRequired */
}

export default FormFields;