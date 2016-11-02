
/* IMPORT */

import {Kind} from 'graphql/language';
import * as validator from 'validator';

/* SCHEMA */

const schema = `scalar Date`;

/* RESOLVERS */

const resolvers = {
  Date: {
    __serialize ( value ) {
      return value.getTime ();
    },
    __parseValue ( value ) {
      return new Date ( value );
    },
    __parseLiteral ({ kind, value }) {
      if ( kind === Kind.INT && validator.isDate ( value ) ) {
        return parseInt ( value, 10 );
      }
      return null;
    }
  }
};

/* EXPORT */

export {schema, resolvers};