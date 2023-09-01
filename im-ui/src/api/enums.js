
const MESSAGE_TYPE = {
	RTC_CALL: 101,
	RTC_ACCEPT: 102,
	RTC_REJECT: 103,
	RTC_CANCEL: 104,
	RTC_FAILED: 105,
	RTC_HANDUP: 106,
	RTC_CANDIDATE: 107
}

const USER_STATE = {
	OFFLINE: 0,
	FREE: 1,
	BUSY: 2
}

export {
	MESSAGE_TYPE,
	USER_STATE
}
