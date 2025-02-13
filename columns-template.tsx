import {createColumnHelper, ColumnDef} from '@tanstack/react-table';
import dayjs from 'dayjs';
import {col} from '../../util/col';
import {I@@TYPENAME@@} from '../@@COLLECTIONNAME@@';

const helper = createColumnHelper<I@@TYPENAME@@>();

export const columns: ColumnDef<I@@TYPENAME@@, any>[] = [
    col.actions(helper),
    col._id()
];
