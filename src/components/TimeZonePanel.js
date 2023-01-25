/**
 * WordPress dependencies.
 */
import { PanelRow, SelectControl } from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies.
 */
import { Broadcaster } from '../helpers/broadcasting';
import { enableSave, getFromGlobal, setToGlobal } from '../helpers/misc';

const TimeZonePanel = (props) => {
	const { timezone, setTimezone } = props;
	const choices = getFromGlobal('timezone_choices');

	// Run only once.
	useEffect(() => {
		setTimezone(getFromGlobal('event_datetime.timezone'));
	}, []);

	useEffect(() => {
		Broadcaster({
			setTimezone: getFromGlobal('event_datetime.timezone'),
		});
	});

	return (
		<PanelRow>
			<SelectControl
				label={__('Time Zone')}
				value={timezone}
				onChange={(value) => {
					setTimezone(value);
					setToGlobal('event_datetime.timezone', value);
					enableSave();
				}}
			>
				{Object.keys(choices).map((group) => {
					return (
						<optgroup key={group} label={group}>
							{Object.keys(choices[group]).map((item) => {
								return (
									<option key={item} value={item}>
										{choices[group][item]}
									</option>
								);
							})}
						</optgroup>
					);
				})}
			</SelectControl>
		</PanelRow>
	);
};

export default TimeZonePanel;
