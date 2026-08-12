// level info
const levels = [
	['HeLL','lelelele','azure','25706351'],
	['B','lelelele','azure','34085027'],
	['Ice Age','lelelele','azure','131182120'],
	['DeCode','lelelele','azure','2997354'],
	['X','lelelele','azure','17235008'],
	['Crazy Bolt','lelelele','azure','413504'],
	['phjork','lelelele','azure','56587109'],
	['Speed Racer','lelelele','azure','3543219'],
	['Shiver','lelelele','azure','56210242'],
	['Platinum Adventure','lelelele','azure, Cole','5904109'],
	['The Nightmare','lelelele','azure, Cole','13519'],
	['THE LIGHTNING ROAD','lelelele','azure, Cole','55520'],
];
const tiers = [
	[0, 'INSANELY DIFFICULT'],
	[3, 'Pretty Difficult'],
	[10, 'Difficult']
];
const startingScore = 1000;
const scoreDivisor = 0.25;

// list generation
const levelsContainer = document.getElementById('list-levels');
let currentTier = 0;

window.onload = function(){
	let htmlString = '';
	for(let i=0;i<levels.length;i++){
		// level info
		const listPoints = startingScore/(1+scoreDivisor*i);
		// add tier
		if(tiers[currentTier]!=undefined && i==tiers[currentTier][0]){
			htmlString+=`<h2 class="difficulty-rating">${tiers[currentTier][1]}</h2>`;
			currentTier++;
		}
		// add level box
		const currentLevel = `<div class="level-container"><a class="level-title" href="${levels[i][1]}">#${i+1} - ${levels[i][0]}</a><span class="level-info">${levels[i][2]} | ${levels[i][3]}</span><span class="level-sub">List Points: ${listPoints.toFixed(2)}</span></div>`;
		htmlString+=currentLevel;
	}
	levelsContainer.innerHTML = htmlString;
}
