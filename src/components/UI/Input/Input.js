import React from "react";
import style from "./Input.module.css"

const Input = ({label, name, type, onChange}) => {
    return (
        <label
            className={style.formLabel}
            htmlFor={name}>
            {label}
            <input
                className={style.formInput}
                name={name}
                id={name}
                type={type}
                placeholder={name}
                onChange={(event) => onChange(event.target.value)}
            />
        </label>
    )
}

export default Input;