<?php
/**
 * Render the Credits section in GatherPress settings.
 *
 * This code snippet is responsible for rendering the "Credits" section in the
 * GatherPress settings. It displays information about the project leaders, GatherPress team,
 * and contributors. It also includes links to contributors' profiles.
 *
 * @package GatherPress\Core
 * @param array $credits An array containing contributor information.
 * @since 1.0.0
 */

use GatherPress\Core\Utility;

if ( ! isset( $credits ) ) {
	return;
}
?>

<div class="gp-settings__credits">
	<h2><?php esc_html_e( 'Credits', 'gatherpress' ); ?></h2>
	<p class="description">
		<?php esc_html_e( 'Meet the folks behind GatherPress. Want to see your name here?', 'gatherpress' ); ?>
		<a href="https://github.com/GatherPress/gatherpress" rel="noopener" target="_blank"><?php esc_html_e( 'Get Involved', 'gatherpress' ); ?></a>.
	</p>
	<h3><?php esc_html_e( 'Project Leaders', 'gatherpress' ); ?></h3>
	<ul class="gp-settings__credits-featured">
		<?php
		foreach ( $credits['project-leaders'] as $gatherpress_contributor ) :
			Utility::render_template(
				sprintf( '%s/includes/templates/admin/settings/credits/contributor-card.php', GATHERPRESS_CORE_PATH ),
				array(
					'gatherpress_contributor' => $gatherpress_contributor,
				),
				true
			);
		endforeach;
		?>
	</ul>
	<h3><?php esc_html_e( 'GatherPress Team', 'gatherpress' ); ?></h3>
	<ul class="gp-settings__credits-featured">
		<?php
		foreach ( $credits['gatherpress-team'] as $gatherpress_contributor ) :
			Utility::render_template(
				sprintf( '%s/includes/templates/admin/settings/credits/contributor-card.php', GATHERPRESS_CORE_PATH ),
				array(
					'gatherpress_contributor' => $gatherpress_contributor,
				),
				true
			);
		endforeach;
		?>
	</ul>
	<h3>
		<?php
		/* translators: %s: GatherPress version. */
		printf( esc_html__( 'Contributors to GatherPress %s', 'gatherpress' ), esc_html( $credits['version'] ) );
		?>
	</h3>
	<ul class="gp-settings__credits-list">
		<?php
		foreach ( $credits['contributors'] as $gatherpress_contributor ) :
			Utility::render_template(
				sprintf( '%s/includes/templates/admin/settings/credits/contributor-link.php', GATHERPRESS_CORE_PATH ),
				array(
					'gatherpress_contributor' => $gatherpress_contributor,
				),
				true
			);
		endforeach;
		?>
	</ul>
</div>