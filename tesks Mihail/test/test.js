describe('getmax3', function() {
    describe('#safety', function() {
        it('should not modify arguments', function() {
            var a = [223, 1, 2, 3, 4];
            var a_copy = [...a];
            getmax3(a);
            if (a.every((v, i) => v === a_copy[i])) {
                return
            };
            throw Error('getmax3 sould not modify the array');
        });
    });
    describe('#solves the problem', function() {
        it('should return top 3 elements of 3+ element array', function() {
            scenarios = [
                [
                    [1, 2, 3, 4],
                    [4, 3, 2]
                ],
                [
                    [23, 4, 3, 1, 6, 2, 12],
                    [23, 12, 6]
                ],
                [
                    [1, 2, 4, 4, 6],
                    [6, 4, 4]
                ]
            ]
            problems = []
            for (i = 0; i < scenarios.length; i++) {
                s = scenarios[i];
                var res = getmax3([...s[0]]);
                if (!res.every((v, i) => v === s[1][i])) {
                    problems.push('getmax3([' + String(s[0]) + ']) = ' + String(res) + ' != ' + String(s[1]))
                };
            };
            if (problems.length > 0) {
                console.log('bam!');
                throw Error(String(problems));
            };
        });
    });
});