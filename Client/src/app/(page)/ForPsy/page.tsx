import {
	PsyHome,
	PsyNeed,
	PsyDifferences,
	PsyJoin,
	PsyPrice,
	PsyFAQ,
	PsyForm,
} from '@/module/exportModule';
import React from 'react';

export default function ForPsy() {
	return (
		<main>
			<PsyHome />
			<PsyNeed />
			<PsyDifferences />
			<PsyJoin />
			<PsyPrice />
			<PsyFAQ />
			<PsyForm />
		</main>
	);
}
