import { FieldValues } from 'react-hook-form';
import { RowData } from '@tanstack/react-table';
import { OIDElement } from '@app/schema/Controls/OIDElement';

export function MercariBrandInsertForm<T extends FieldValues & RowData>() {
    return (
        <>
            <OIDElement
                name='_id'
                label='OID'
            />
        </>
    );
}
