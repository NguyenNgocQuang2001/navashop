import styles from "./filter.module.scss"
import Select from "react-select"
import { Link, useSearchParams } from 'react-router-dom'
import { useState } from "react"
import clsx from 'clsx'

const options = [
    
    { value: '1', label: 'Sắp xếp theo mặc định' },
    { value: '2', label: 'Sắp xếp theo giá tăng dần' },
    { value: '3', label: 'Sắp xếp theo giá giảm dần' },
    { value: '4', label: 'Sắp xếp theo tên A -> Z' },
    { value: '5', label: 'Sắp xếp theo tên Z -> A' },
];

function Filter() {

    const [param, setParam] = useState(0)
    let [searchParams, setSearchParams] = useSearchParams();
    let s = parseInt(searchParams.get("sort"))
    if (s === undefined || s === null || isNaN(s)) {

        s = options[0].label
    }
    const [sortBy, setSortBy] = useState(options[0])
    const handleSort = (value) => {

        setSortBy(value)
        searchParams.set("sort", value.label)
        setSearchParams(searchParams)
    };

    return (

        <div className={styles.filter}>
            
            <h2>
                
                <Link 
                    to="/newproduct"
                    className={styles.link}
                >
                    <span 
                        className={clsx(styles.filter__text, {
                            
                            [styles.active]: param === 1
                        })}
                        onClick={() => setParam(1)}
                    >
                        SẢN PHẨM MỚI
                    </span>
                </Link>
                &ensp;/&ensp;
                <Link 
                    to="/selling"
                    className={styles.link}
                >
                    <span
                        className={clsx(styles.filter__text, {
                                
                            [styles.active]: param === 2
                        })}
                        onClick={() => setParam(2)}
                    >
                        BÁN CHẠY NHẤT
                    </span>
                </Link>
                &ensp;/&ensp;
                <Link 
                    to="/sale"
                    className={styles.link}
                >
                    <span
                        className={clsx(styles.filter__text, {
                            
                            [styles.active]: param === 3
                        })}
                        onClick={() => setParam(3)}
                    >
                        KHUYẾN MẠI
                    </span>
                </Link>
            </h2>
            <div className={styles.select}>

                <Select
                    defaultValue={options[0]}
                    className={styles.select__input}
                    onChange={handleSort}
                    isSearchable={false}
                    options={options}
                    value={sortBy}
                />
            </div>
        </div>
    )
}

export default Filter