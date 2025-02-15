import React from 'react'
import Button from '../Button/Button'
import Input from '../Input/Input'
import './Form.css'
import { Link } from 'react-router-dom'

const Form = ({ title, fields, onSubmit, buttons, links }) => {
    return (
        <form onSubmit={onSubmit} className='form'>
            <h1 className='title'>{title}</h1>
            {fields.map((field, index) => (
                <div className='input-container' key={index}>
                    <Input
                        label={field.label}
                        name={field.name}
                        type={field.type}
                        placeholder={field.placeholder}
                        value={field.value}
                        onChange={field.onChange}
                    />
                    {field.errors.map((error, i) => (
                        <p key={i} style={{ color: 'red' }}>{error}</p>
                    ))}
                </div>
            ))}
            <div className="button-container">
                {buttons.map((button, index) => (
                    <Button
                        key={index}
                        label={button.label}
                        variant={button.variant}
                        onClick={button.onClick}
                        disabled={button.disabled || fields.some(field => field.errors.length > 0 || !field.value)}
                    />
                ))}
            </div>
            {links && (
                <div className="form-links">
                    {links.map((link, i) => (
                        <span key={i}>
                            {link.text} <Link to={link.to}>{link.label}</Link>
                        </span>
                    ))}
                </div>
            )}
        </form>
    )
}

export default Form