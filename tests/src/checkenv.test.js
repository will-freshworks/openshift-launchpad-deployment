
const {test, expect} = require('@jest/globals');
const {exec} = require('child_process')

describe('checkenv.sh', () => {
    test('succeeds for an empty list', done => {
        exec("../scripts/checkenv.sh", (error, stdout, stderr) => {
            expect(error).toBeFalsy();
            expect(stdout).toEqual('');
            done();
        });
    });

    test('succeed with two assigned vars', done => {
        exec("X=1 Y=2 ../scripts/checkenv.sh X Y", (error, stdout, stderr) => {
            expect(error).toBeFalsy();
            expect(stdout).toContain('X=1')
            expect(stdout).toContain('Y=2')
            done();
        });
    });

    test('fail with one missing var', done => {
        exec("X=1 Y=2 ../scripts/checkenv.sh X Y Z", (error, stdout, stderr) => {
            expect(error).toBeTruthy();
            expect(stdout).toContain(' Z not set');
            expect(stdout).toContain('X=1')
            expect(stdout).toContain('Y=2')
            done();
        });
    });
});
