import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from "./pagination.module.scss"

function MyPagination() {

    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
      setPage(value);
    };
    return (
        <Stack 
            spacing={2}
        >
            <Pagination 
                count={10}
                className={styles.pagination}
                page={page}
                onChange={handleChange}
            />
        </Stack>
    );
}

export default MyPagination