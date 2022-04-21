import * as React from "react";
import "./App.css";
import GlobalLayout from "./layouts/globallayout/GlobalLayout";
import HorizontalMainArea from "./layouts/horizontalmainarea/HorizontalMainArea";
import HorizontalSecondaryArea from "./layouts/horizontalsecondaryarea/HorizontalSecondaryArea";
import VerticalArea from "./layouts/verticalarrea/VerticalArea";
import { useState, useEffect } from "react";
import { useApi } from "./service/use-api";
import "./App.css";
/**
 * Component for showing navigation buttons
 *
 * @component
 */
function App() {

	const userId = 12;
	const slash = "/";
	const url = "http://localhost:3000/user/";

	const activityParameter = "activity";

	const averageSessionsParameter = "average-sessions";

	const performanceParameter = "performance";

	const actualUrlUserInfo = url + userId;

	const mockedUrlUserInfo = "edatauser.json";

	const actualUrlUserActivity = url + userId + slash + activityParameter;

	const mockedUrlUserActivity = "datauseractivity.json";

	const actualUrlUserSession = url + userId + slash + averageSessionsParameter;

	const mockedUrlUserSession = "datauseraveragesessions.json";

	const actualUrlUserPerformance = url + userId + slash + performanceParameter;

	const mockedUrlUserPerformance = "datauserperformance.json";

	const urlUserInfo = actualUrlUserInfo;

	const urlUserActivity = actualUrlUserActivity;

	const urlUserSession = actualUrlUserSession;

	const urlUserPerformance = actualUrlUserPerformance;

	const {
		response: userResponse,
		loading: userLoadingResponse,
		error: userErrorResponse,
	} = useApi({ method: "get", url: `${urlUserInfo}` });

	const {
		response: activityResponse,
		loading: activityLoadingResponse,
		error: activityErrorResponse,
	} = useApi({ method: "get", url: ` ${urlUserActivity}` });

	const {
		response: averageSessionsResponse,
		loading: averageSessionsLoadingResponse,
		error: averageSessionsErrorResponse,
	} = useApi({
		method: "get",
		url: ` ${urlUserSession}`,
	});

	const {
		response: performanceResponse,
		loading: performanceLoadingResponse,
		error: performanceErrorResponse,
	} = useApi({ method: "get", url: ` ${urlUserPerformance}` });
	const [userData, setUserData] = useState([]);
	const [activityData, setActivityData] = useState([]);
	const [averageSessionsData, setSessionsData] = useState([]);
	const [performanceData, setPerformanceData] = useState([]);
	const [userDataScore, setUserDataScore] = useState("");
	const [userDataScoreValue, setUserDataScoreValue] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const [globalLoading, setGlobalLoading] = useState(false);

	useEffect(() => {
		let message = "";
		if (userErrorResponse) {
			message += "Les données utilisateurs ne peuvent pas être téléchargées";
		}
		if (activityErrorResponse) {
			message += "Les données d'activité ne peuvent pas être téléchargées";
		}
		if (averageSessionsErrorResponse) {
			message += "Les données des sessions ne peuvent pas être téléchargées";
		}
		if (performanceErrorResponse) {
			message += "Les données de performance ne peuvent pas être téléchargées";
		}
		setErrorMessage(message);

		if (userResponse !== null) {

			const userScoreResponseValue =
				(userResponse.data.score * 100).toString() + "%";

			const userScoreResponse = [
				{ value: userResponse.data.score * 100 },
				{ value: 100 - userResponse.data.score * 100 },
			];
			setUserData(userResponse);
			setUserDataScoreValue(userScoreResponseValue);
			setUserDataScore(userScoreResponse);
		}
		if (activityResponse !== null) {

			const activityResponseFormated = activityResponse.data.sessions;
			for (let i = 0; i < activityResponseFormated.length; i++) {
				activityResponseFormated[i].dayNumber = i + 1;
			}

			setActivityData(activityResponseFormated);
		}
		if (averageSessionsResponse !== null) {
			/**
			 * Array with letter of the week
			 * @type {Array}
			 * @const
			 */
			const letterDay = ["L", "M", "M", "J", "V", "S", "D"];

			/**
			 * Object with sessions data
			 * @type {Object}
			 * @const
			 */
			let averageSessionsResponseFormated =
				averageSessionsResponse.data.sessions;
			for (let i = 0; i < averageSessionsResponse.data.sessions.length; i++) {
				averageSessionsResponseFormated[i].day = letterDay[i];
			}
			setSessionsData(averageSessionsResponseFormated);
		}
		if (performanceResponse !== null) {
			/**
			 * Array with type of features
			 * @type {string}
			 * @const
			 */
			const type = [
				"Intensité",
				"Vitesse",
				"Force",
				"Endurance",
				"Energie",
				"Cardio",
			];
			let performanceResponseFormated = performanceResponse.data.data;
			for (var i = 0; i < performanceResponse.data.data.length; i++) {
				performanceResponseFormated[i].type = type[i];
			}
			setPerformanceData(performanceResponseFormated);
		}
		if (
			!userLoadingResponse &
			!activityLoadingResponse &
			!averageSessionsLoadingResponse &
			!performanceLoadingResponse
		) {
			setGlobalLoading(true);
		}
		console.log(performanceData)
	},
			// eslint-disable-next-line react-hooks/exhaustive-deps 
	[		
		userLoadingResponse,
		activityLoadingResponse,
		averageSessionsLoadingResponse,
		performanceLoadingResponse,
	]);

	return (
		<div className="App">
			<GlobalLayout>
				{!errorMessage ? (
					globalLoading ? (
						<>
							<h1 className="titlearea">
								{"Bonjour "}
								<span className="firstname">
									{userData.data.userInfos.firstName}
								</span>
							</h1>
							<p className="congratsarea">
								Félicitation ! Vous avez explosé vos objectifs hier 👏
							</p>

							<HorizontalMainArea activity={activityData} />

							<HorizontalSecondaryArea
								score={userDataScore}
								scorevalue={userDataScoreValue}
								sessions={averageSessionsData}
								performance={performanceData}
							/>

							<VerticalArea keydata={userData.data.keyData}></VerticalArea>
						</>
					) : (
						<div className="uploading">Chargement des données</div>
					)
				) : (
					<div className="error">{errorMessage}</div>
				)}
			</GlobalLayout>
		</div>
	);
}

export default App;
