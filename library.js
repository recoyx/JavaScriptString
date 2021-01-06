import StringSimilarity from 'string-similarity';

const JSString = (typeof global == 'object' ? global : window).String;

export class String {
    static apply(str, ...rest) {
        str = JSString(str);
        while (rest[0] instanceof Array) rest = rest[0];
        var variables = undefined;
        if (rest.length == 1 && !(rest[0] instanceof Array)) variables = rest[0];
        return str.replace(/\$([a-zA-Z0-9]+|\$|\d+)/g, (_, argument) => {
            if (argument == '$') return '$';
            if (!variables) {
                var i = Number(argument);
                return i <= rest.length ? rest[i - 1] : 'undefined';
            }
            else return variables instanceof Map ? variables.get(argument) : variables[argument];
        });
    }

    static eqv(arg1, arg2) {
        return StringSimilarity.compareTwoStrings(arg1, arg2);
    }
}

export default String;