/**
 * WordPress dependencies.
 */
import { __ } from '@wordpress/i18n';
import {
	BlockContextProvider,
	BlockControls,
	InnerBlocks,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	ToolbarButton,
	ToolbarGroup,
	Spinner,
} from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';

/**
 * Internal dependencies.
 */
import RsvpManager from './rsvp-manager';
import TEMPLATE from './template';
import { getFromGlobal } from '../../helpers/globals';

/**
 * Fetch RSVP responses from the API.
 *
 * @param {number} postId The post ID for which to fetch RSVP responses.
 * @return {Promise<Object>} The RSVP responses data.
 */
async function fetchRsvpResponses(postId) {
	const apiUrl = getFromGlobal('urls.eventApiUrl');
	const response = await fetch(`${apiUrl}/rsvp-responses?post_id=${postId}`);

	return response.json();
}

/**
 * Edit component for the GatherPress RSVP Response block.
 *
 * This component handles the rendering and logic for the editor interface
 * of the GatherPress RSVP Response block. It fetches RSVP data, manages
 * block-specific state, and passes relevant context to child blocks.
 *
 * @param {Object} root0            - The props object passed to the component.
 * @param {Object} root0.attributes - Block attributes containing configuration and data.
 * @param {Object} root0.context    - Block context data containing postId and event info.
 * @since 1.0.0
 *
 * @return {JSX.Element} The rendered edit interface for the block.
 */
const Edit = ({ attributes, context }) => {
	const blockProps = useBlockProps();
	const [editMode, setEditMode] = useState(false);
	const [showEmptyRsvpMessage, setShowEmptyRsvpMessage] = useState(false);
	const [defaultStatus, setDefaultStatus] = useState('attending');
	const [responses, setResponses] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const postId = attributes?.postId ?? context?.postId ?? null;

	useEffect(() => {
		const emptyBlocks = document.querySelectorAll(
			'.gatherpress--empty-rsvp'
		);
		const responseBlocks = document.querySelectorAll(
			'.gatherpress--rsvp-responses'
		);

		emptyBlocks.forEach((block) => {
			block.classList.toggle(
				'gatherpress--is-not-visible',
				!showEmptyRsvpMessage
			);
		});

		responseBlocks.forEach((block) => {
			block.classList.toggle(
				'gatherpress--is-not-visible',
				showEmptyRsvpMessage
			);
		});
	}, [showEmptyRsvpMessage, responses]);

	// Fetch responses when postId changes.
	useEffect(() => {
		if (!postId) {
			setResponses(null);
			setLoading(false);
			return;
		}

		setLoading(true);
		setError(null);

		fetchRsvpResponses(postId)
			.then((response) => {
				setResponses(response.data);
				setLoading(false);
			})
			.catch((err) => {
				setError(err.message);
				setLoading(false);
			});
	}, [postId]);

	const onEditClick = (e) => {
		e.preventDefault();
		setEditMode(!editMode);
	};

	if (loading) {
		return (
			<div {...blockProps}>
				<Spinner />
			</div>
		);
	}

	if (error) {
		return (
			<div {...blockProps}>
				<p>{__('Failed to load RSVP responses.', 'gatherpress')}</p>
			</div>
		);
	}

	return (
		<div {...blockProps}>
			<BlockContextProvider
				value={{
					'gatherpress/rsvpResponses': responses,
					postId,
				}}
			>
				<InspectorControls>
					<PanelBody>
						<ToggleControl
							label={__('Show Empty RSVP Block', 'gatherpress')}
							checked={showEmptyRsvpMessage}
							onChange={(value) => setShowEmptyRsvpMessage(value)}
							help={__(
								'Toggle to show or hide the Empty RSVP block.',
								'gatherpress'
							)}
						/>
					</PanelBody>
				</InspectorControls>
				<BlockControls>
					<ToolbarGroup>
						<ToolbarButton
							label={__('Edit', 'gatherpress')}
							text={
								editMode
									? __('Preview', 'gatherpress')
									: __('Edit', 'gatherpress')
							}
							onClick={onEditClick}
						/>
					</ToolbarGroup>
				</BlockControls>
				{editMode && (
					<RsvpManager
						defaultStatus={defaultStatus}
						setDefaultStatus={setDefaultStatus}
					/>
				)}
				{!editMode && <InnerBlocks template={TEMPLATE} />}
			</BlockContextProvider>
		</div>
	);
};

export default Edit;
