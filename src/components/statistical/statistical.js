import styles from "./statistical.module.scss"
import Select from "react-select"


const optionTime = [

    { value: '1', label: 'Hom nay' },
    { value: '2', label: 'Tuan nay' },
    { value: '3', label: 'Thang nay' },
    { value: '4', label: 'Tuan truoc' },
    { value: '5', label: 'Thang truoc' },
]

const optionSort = [

    { value: '1', label: 'Sắp xếp theo mặc định' },
    { value: '2', label: 'Sắp xếp theo ban nhieu nhat' },
    { value: '3', label: 'Sắp xếp theo ban it nhat' },
    { value: '4', label: 'Sắp xếp theo doanh thu nhieu nhat' },
    { value: '5', label: 'Sắp xếp theo doanh thu it nhat' },
]

const optionSex = [

    { value: '1', label: 'Tat ca' },
    { value: '2', label: 'Do nam' },
    { value: '3', label: 'Do nu' },
    { value: '4', label: 'Do doi' },
]

function Statistical() {

    return (

        <div
            className={styles.statistical}
        >
            <div className={styles.select}>

                <Select

                    defaultValue={optionTime[4]}
                    className={styles.select__input}
                    isSearchable={false}
                    options={optionTime}
                />

                <Select

                    defaultValue={optionSort[4]}
                    className={styles.select__input}
                    isSearchable={false}
                    options={optionSort}
                />

                <Select

                    defaultValue={optionSex[0]}
                    className={styles.select__input}
                    isSearchable={false}
                    options={optionSex}
                />
            </div>
        </div>
    )
}

export default Statistical