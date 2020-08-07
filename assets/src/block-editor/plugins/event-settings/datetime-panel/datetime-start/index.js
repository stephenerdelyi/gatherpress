import { DateTimePicker } from '@wordpress/components';
import { __experimentalGetSettings } from '@wordpress/date';
import { withState } from '@wordpress/compose';
import { updateDateTimeStart, getDateTimeStart } from './label';

export const DateTimeStart = withState()( ( { setState } ) => {

	const settings     = __experimentalGetSettings();
	const is12HourTime = /a(?!\\)/i.test(
		settings.formats.time
			.toLowerCase()
			.replace( /\\\\/g, '' )
			.split( '' ).reverse().join( '' )
	);

	return (
		<DateTimePicker
			currentDate = { getDateTimeStart() }
			onChange    = { ( date ) => updateDateTimeStart( date, setState ) }
			is12Hour    = { is12HourTime }
		/>
	);
} );
