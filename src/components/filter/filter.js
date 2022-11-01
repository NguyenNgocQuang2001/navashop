import styles from "./filter.module.scss"
import Select from "react-select"

const options = [
    { value: '1', label: 'Sap xep theo mac dinh' },
    { value: '2', label: 'Sap xep theo gia tang' },
    { value: '3', label: 'Sap xep theo gia giam' },
    { value: '4', label: 'Sap xep theo A -> Z' },
    { value: '5', label: 'Sap xep theo Z -> A' },
  ];

function Filter() {

    return (

        <div className={styles.filter}>
            
            <h2>
                
                <span className={styles.filter__text}>
                    SAN PHAM MOI
                </span>
                &ensp;/&ensp;
                <span className={styles.filter__text}>
                    BAN CHAY NHAT
                </span>
                &ensp;/&ensp;
                <span className={styles.filter__text}>
                    KHUYEN MAI
                </span>
            </h2>
            <div className={styles.select}>

                <Select
                    defaultValue={options[0]}
                    className={styles.select__input}
                    //onChange={setSelectedOption}
                    isSearchable={false}
                    options={options}
                />
            </div>
        </div>
    )
}

export default Filter