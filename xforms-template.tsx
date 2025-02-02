import { ObjectId } from 'mongodb';
import { I@@TYPENAME@@ } from '@app/schema/@@COLLECTIONNAME@@';
import $to from '@app/schema/xforms/$to';
import $from from '@app/schema/xforms/$from';

export type I@@TYPENAME@@ = {
    _id: ObjectId;
    owner: string;
};

export function @@COLLECTIONNAME@@Convert({
    _id,
    owner
}: I@@TYPENAME@@) {
    return {
        _id: $to.OID(_id),
        owner: $to.owner(owner)
    };
}

export function @@COLLECTIONNAME@@Transform({ _id, owner, ...rest }: I@@TYPENAME@@) {
    return {
        ...rest,
        _id: $from.OID(_id),
        owner: owner ?? 'admin@junk-in-the-trunk.com'
    };
}
