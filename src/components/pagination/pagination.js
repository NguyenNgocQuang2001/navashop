import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from "./pagination.module.scss"
import { useSearchParams } from "react-router-dom";


function MyPagination({ pages }) {

    let [searchParams, setSearchParams] = useSearchParams();
    let p = parseInt(searchParams.get("p"))
    if (p === undefined || p === null || isNaN(p) || p === "0") {

        p = 1
    } else {

        p = parseInt(p)
    }
    const [page, setPage] = React.useState(p);
    const handleChange = (event, value) => {

        setPage(value);
        searchParams.set("p", value)
        setSearchParams(searchParams)
    };

    return (
        <Stack 
            spacing={2}
        >
            <Pagination 
                count={pages}
                className={styles.pagination}
                page={page}
                onChange={handleChange}
            />
        </Stack>
    );
}

export default MyPagination