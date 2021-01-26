// HTTP status classes mapped to enumerations
const statusClass = Object.freeze({
	INFORMATIONAL: 1,
	SUCCESS: 2,
	REDIRECTIONAL: 3,
	CLIENT_ERROR: 4,
	SERVER_ERROR: 5
});

// Status codes mapped to textual identifiers
const statusText = Object.freeze({
	100: 'CONTINUE',
	101: 'SWITCHING_PROTOCOLS',
	102: 'PROCESSING',
	103: 'EARLY_HINTS',
	200: 'OK',
	201: 'CREATED',
	202: 'ACCEPTED',
	203: 'NON_AUTHORITATIVE_INFORMATION',
	204: 'NO_CONTENT',
	205: 'RESET_CONTENT',
	206: 'PARTIAL_CONTENT',
	207: 'MULTI_STATUS',
	208: 'ALREADY_REPORTED',
	226: 'IM_USED',

	300: 'MULTIPLE_CHOICES',
	301: 'MOVED_PERMANENTLY',
	302: 'FOUND',
	303: 'SEE_OTHER',
	304: 'NOT_MODIFIED',
	305: 'USE_PROXY',
	306: 'UNUSED',
	307: 'TEMPORARY_REDIRECT',
	308: 'PERMANENT_REDIRECT',

	400: 'BAD_REQUEST',
	401: 'UNAUTHORIZED',
	402: 'PAYMENT_REQUIRED',
	403: 'FORBIDDEN',
	404: 'NOT_FOUND',
	405: 'METHOD_NOT_ALLOWED',
	406: 'NOT_ACCEPTABLE',
	407: 'PROXY_AUTHENTICATION_REQUIRED',
	408: 'REQUEST_TIMEOUT',
	409: 'CONFLICT',
	410: 'GONE',
	411: 'LENGTH_REQUIRED',
	412: 'PRECONDITION_FAILED',
	413: 'PAYLOAD_TOO_LARGE',
	414: 'URI_TOO_LONG',
	415: 'UNSUPPORTED_MEDIA_TYPE',
	416: 'RANGE_NOT_SATISFIABLE',
	417: 'EXPECTATION_FAILED',
	421: 'MISDIRECTED_REQUEST',
	422: 'UNPROCESSABLE_ENTITY',
	423: 'LOCKED',
	424: 'FAILED_DEPENDENCY',
	425: 'TOO_EARLY',
	426: 'UPGRADE_REQUIRED',
	428: 'PRECONDITION_REQUIRED',
	429: 'TOO_MANY_REQUEST',
	431: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
	451: 'UNAVAILABLE_FOR_LEGAL_REASONS',

	500: 'INTERNAL_SERVER_ERROR',
	501: 'NOT_IMPLEMENTED',
	502: 'BAD_GATEWAY',
	503: 'SERVICE_UNAVAILABLE',
	504: 'GATEWAY_TIMEOUT',
	505: 'HTTP_VERSION_NOT_SUPPORTED',
	506: 'VARIANT_ALSO_NEGOTIATES',
	507: 'INSUFFICIENT_STORAGE',
	508: 'LOOP_DETECTED',
	510: 'NOT_EXTENDED',
	511: 'NETWORK_AUTHENTICATION_REQUIRED'
});

// Textual status identifiers mapped to status codes
const statusCode = Object.freeze({
	CONTINUE:                                 100,
	SWITCHING_PROTOCOLS:                      101,
	PROCESSING:                               102,
	EARLY_HINTS:                              103,

	OK:                                       200,
	CREATED:                                  201,
	ACCEPTED:                                 202,
	NON_AUTHORITATIVE_INFORMATION:            203,
	NO_CONTENT:                               204,
	RESET_CONTENT:                            205,
	PARTIAL_CONTENT:                          206,
	MULTI_STATUS:                             207,
	ALREADY_REPORTED:                         208,
	IM_USED:                                  226,

	MULTIPLE_CHOICES:                         300,
	MOVED_PERMANENTLY:                        301,
	FOUND:                                    302,
	SEE_OTHER:                                303,
	NOT_MODIFIED:                             304,
	USE_PROXY:                                305,
	UNUSED:                                   306,
	TEMPORARY_REDIRECT:                       307,
	PERMANENT_REDIRECT:                       308,

	BAD_REQUEST:                              400,
	UNAUTHORIZED:                             401,
	PAYMENT_REQUIRED:                         402,
	FORBIDDEN:                                403,
	NOT_FOUND:                                404,
	METHOD_NOT_ALLOWED:                       405,
	NOT_ACCEPTABLE:                           406,
	PROXY_AUTHENTICATION_REQUIRED:            407,
	REQUEST_TIMEOUT:                          408,
	CONFLICT:                                 409,
	GONE:                                     410,
	LENGTH_REQUIRED:                          411,
	PRECONDITION_FAILED:                      412,
	PAYLOAD_TOO_LARGE:                        413,
	URI_TOO_LONG:                             414,
	UNSUPPORTED_MEDIA_TYPE:                   415,
	RANGE_NOT_SATISFIABLE:                    416,
	EXPECTATION_FAILED:                       417,
	MISDIRECTED_REQUEST:                      421,
	UNPROCESSABLE_ENTITY:                     422,
	LOCKED:                                   423,
	FAILED_DEPENDENCY:                        424,
	TOO_EARLY:                                425,
	UPGRADE_REQUIRED:                         426,
	PRECONDITION_REQUIRED:                    428,
	TOO_MANY_REQUESTS:                        429,
	REQUEST_HEADER_FIELDS_TOO_LARGE:          431,
	UNAVAILABLE_FOR_LEGAL_REASONS:            451,

	INTERNAL_SERVER_ERROR:                    500,
	NOT_IMPLEMENTED:                          501,
	BAD_GATEWAY:                              502,
	SERVICE_UNAVAILABLE:                      503,
	GATEWAY_TIMEOUT:                          504,
	HTTP_VERSION_NOT_SUPPORTED:               505,
	VARIANT_ALSO_NEGOTIATES:                  506,
	INSUFFICIENT_STORAGE:                     507,
	LOOP_DETECTED:                            508,
	NOT_EXTENDED:                             510,
	NETWORK_AUTHENTICATION_REQUIRED:          511
});

// Status codes mapped to status messages/descriptions
const statusDesc = Object.freeze({
	100: 'Continue',
	101: 'Switching Protocols',
	102: 'Processing',
	103: 'Early Hints',
	200: 'OK',
	201: 'Created',
	202: 'Accepted',
	203: 'Non-Authoritative Information',
	204: 'No Content',
	205: 'Reset Content',
	206: 'Partial Content',
	207: 'Multi-Status',
	208: 'Already Reported',
	226: 'IM Used',

	300: 'Multiple Choices',
	301: 'Moved Permanently',
	302: 'Found',
	303: 'See Other',
	304: 'Not Modified',
	305: 'Use Proxy',
	306: '(Unused)',
	307: 'Temporary Redirect',
	308: 'Permanent Redirect',

	400: 'Bad Request',
	401: 'Unauthorized',
	402: 'Payment Required',
	403: 'Forbidden',
	404: 'Not Found',
	405: 'Method Not Allowed',
	406: 'Not Acceptable',
	407: 'Proxy Authentication Required',
	408: 'Request Timeout',
	409: 'Conflict',
	410: 'Gone',
	411: 'Length Required',
	412: 'Precondition Failed',
	413: 'Payload Too Large',
	414: 'URI Too Long',
	415: 'Unsupported Media Type',
	416: 'Range Not Satisfiable',
	417: 'Expectation Failed',
	421: 'Misdirected Request',
	422: 'Unprocessable Entity',
	423: 'Locked',
	424: 'Failed Dependency',
	425: 'Too Early',
	426: 'Upgrade Required',
	428: 'Precondition Required',
	429: 'Too Many Requests',
	431: 'Request Header Fields Too Large',
	451: 'Unavailable For Legal Reasons',

	500: 'Internal Server Error',
	501: 'Not Implemented',
	502: 'Bad Gateway',
	503: 'Service Unavailable',
	504: 'Gateway Timeout',
	505: 'HTTP Version Not Supported',
	506: 'Variant Also Negotiates',
	507: 'Insufficient Storage',
	508: 'Loop Detected',
	510: 'Not Extended',
	511: 'Network Authentication Required'
});

/** 
 * Used as HTTP status objects.
 * @class StatusCode
 * @extends String
 * */
class StatusCode extends String {
	/**
	 * The numeric status code.
	 * @name Code
	 * @type Number
	 */
	Code() {}

	/**
	 * The uppercase textual identifier.
	 * @name Text
	 * @type String
	 */
	Text() {}

	/**
	 * The status message/description.
	 * @name Desc
	 * @type String
	 */
	Desc() {};

	/**
	 * The status class enumeration.
	 * @name Class
	 * @type Number
	 */
	Class() {};

	/**
	 * Create a HTTP status object.
	 */
	constructor(param) {
		if (typeof param === 'number') {
			if (param < 100 || param > 599)
				throw new Error(`Invalid status code "${param}".`);
			
			const num = Number(param.toFixed(0));

			const Code = num;
			const Text = statusText[Code] || 'UNASSIGNED';
			const Desc = statusDesc[Code] || 'Unassigned';
			const Class = Math.floor(Code / 100);
			super(Desc);

			Object.defineProperties(this, {
				/**
				 * The status message/description.
				 * @name Desc
				 * @type String
				 */
				Code: {
					get: () => Code
				},
				Text: {
					get: () => Text
				},
				Desc: {
					get: () => Desc
				},
				Class: {
					get: () => Class
				}
			});
		} else if (typeof param === 'string') {
			const CAPITAL_STR = param.toUpperCase()
				.replace(/\s+/g, ' ')
				.replace(/[\s|\-]/g, '_')
				.replace(/[\(\)]/g, '');
			
			if (!(CAPITAL_STR in statusCode))
				throw new Error(`Invalid status message "${param}".`);
			
			const Text = CAPITAL_STR;
			const Code = statusCode[Text];
			const Desc = statusDesc[Code];
			const Class = Math.floor(Code / 100);
			super(Desc);

			Object.defineProperties(this, {
				Code: {
					get: () => Code
				},
				Text: {
					get: () => Text
				},
				Desc: {
					get: () => Desc
				},
				Class: {
					get: () => Class
				}
			});
		} else
			throw new Error(`Invalid status identifier "${param}". Enter a valid string or number.`);
	}
}

const Exports = {
	StatusCode,
	statusClass,
	statusCode,
	statusDesc,
	statusText
};

(function(global, factory) {
	if (typeof define === 'function' && define.amd) {
		define(['exports'], factory);
	} else if (typeof exports !== 'undefined') {
		factory(exports);
	} else {
		let mod = { exports: {} };
		factory(mod.exports);
		Object.keys(mod.exports).forEach(key => global[key] = mod.exports[key]);
	}
})(this, function(exports) {
	"use strict";
	Object.keys(Exports).forEach(key => exports[key] = Exports[key]);
});
