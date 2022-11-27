import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import styles from "./pagination.module.scss"
import { useNavigate, createSearchParams } from 'react-router-dom';


function MyPagination({ pages }) {

    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {

        setPage(value);
        navigate({

            pathname: "",
            search: `?${createSearchParams({

                "p": value
            })}`,
        })
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