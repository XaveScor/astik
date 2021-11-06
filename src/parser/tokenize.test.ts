import { test } from 'uvu';
import * as assert from 'uvu/assert';
import { tokenize } from './tokenize';

test('simple tokenizer', () => {
    const program = 'const a = 1;';
    const tokens = tokenize(program);

    assert.equal(tokens, ['const', 'a', '=', '1']);
});

test.run();