import starActive from '../images/star-active.png'
import starInactive from '../images/star-inactive.png'
import styled from 'styled-components'


function Rating(props) {
    const Styledimg=styled.img`
width:24px;
@media screen and (max-width: 767px){
    width:13px;
}
`
	const range = [1, 2, 3,4,5]
	const actif =
		
			<Styledimg src={starActive} alt='star-active' />
		const inactif=<Styledimg src={starInactive} alt='star-inactive' />

	return (
		<div>
			{range.map((rangeElem) =>
				props.rating >= rangeElem ? (
					<span key={rangeElem.toString()}>{actif}</span>
				):<span key={rangeElem.toString()}>{inactif}</span>
			)}
		</div>
	)
}

export default Rating
