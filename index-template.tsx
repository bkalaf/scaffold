import { ColumnDef, createColumnHelper, RowData } from '@tanstack/react-table';
import { ObjectId } from 'mongodb';
import col from '@app/schema/col';
import dayjs from 'dayjs';
import {
    DateElement,
    IntegerElement,
    TextElement
} from '@app/schema/Controls/TextElement';
import { OIDElement } from '@app/schema/Controls/OIDElement';
import { FieldValues } from 'react-hook-form';

export type I@@TYPENAME@@ = {
    _id: ObjectId;
    owner: string;
};

const helper = createColumnHelper<I@@TYPENAME@@>();

export const columns: ColumnDef<I@@TYPENAME@@, any>[] = [
    col.actions(helper),
    col._id()
];
