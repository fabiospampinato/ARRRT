
/* IMPORT */

import * as validator from 'validator';

/* SCHEMA */

const schema = `scalar Email`;

/* RESOLVERS */

const resolvers = {
  Email: {
    __serialize: value => value,
    __parseValue: value => value,
    __parseLiteral ({ value }) {
      if ( validator.isEmail ( value ) ) {
        return validator.normalizeEmail ( value );
      }
      return null;
    }
  }
};

/* EXPORT */

export {schema, resolvers};