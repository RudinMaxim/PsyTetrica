import {
	PsyAllNeed,
	PsyDifferences,
	PsyFAQ,
	PsyHomeSection,
	PsyJoin,
} from '@/module/exportModule';
import React from 'react';

export default function ForPsy() {
	return (
		<main>
			<div className='continer'>
				<PsyHomeSection />
				<PsyAllNeed />
				<PsyDifferences />
				<PsyJoin />
				<PsyFAQ />
			</div>
		</main>
	);
}
