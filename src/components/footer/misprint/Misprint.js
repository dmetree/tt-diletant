import React from 'react'
import s from './Misprint.module.css'

function Misprint() {
    return (
        <div>
            <div className={s.misprint}>
                <div className={s.misprintLabel}>
                    Нашли ошибку или опечатку ? <br />Выделите ее и нажмите Ctrl+Enter
                </div>
            </div>
        </div>
    )
}

export default Misprint
