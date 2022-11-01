import styles from "./filter.module.scss"
import Select from "react-select"

const options = [
    { value: '1', label: 'Sắp xếp theo mặc định' },
    { value: '2', label: 'Sắp xếp theo giá tăng dần' },
    { value: '3', label: 'Sắp xếp theo giá giảm dần' },
    { value: '4', label: 'Sắp xếp theo tên A->Z' },
    { value: '5', label: 'Sắp xếp theo tên Z->A' },
  ];

function Filter() {

    return (

        <div className={styles.filter}>
            
            <h2>
                
                <span className={styles.filter__text}>
                    SẢN PHẨM MỚI
                </span>
                &ensp;/&ensp;
                <span className={styles.filter__text}>
                    BÁN CHẠY NHẤT
                </span>
                &ensp;/&ensp;
                <span className={styles.filter__text}>
                    KHUYẾN MẠI
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