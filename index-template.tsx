import { ColumnDef, createColumnHelper, RowData } from '@tanstack/react-table';
import { ObjectId } from 'mongodb';
import dayjs from 'dayjs';
import {
    DateElement,
    IntegerElement,
    TextElement
} from '@app/schema/Controls/TextElement';
import { FieldValues } from 'react-hook-form';

export type I@@TYPENAME@@ = {
    _id: ObjectId;
    owner: string;
};
