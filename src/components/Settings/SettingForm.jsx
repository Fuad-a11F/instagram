import React from 'react'
import PropTypes from 'prop-types';

function SettingForm({title, setChange, change}) {
    return (
        <div>
            <div className="form__input-row">
                <span>{title}</span>
                <input type="text" placeholder={title} onChange={(e) => setChange(e.target.value)} value={change ? change : ''} />
            </div>
        </div>
    )
}

SettingForm.propTypes = {
    title: PropTypes.string,
    setChange:  PropTypes.func,
}

export default SettingForm
