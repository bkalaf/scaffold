import { I@@TYPENAME@@ } from '../@@COLLECTIONNAME@@';
import {$to} from '../../util/to';
import {$from} from '../../util/from';

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
