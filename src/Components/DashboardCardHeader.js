export default function DashboardCardHeader({chartTitle}){

    return(
        <div className="dashboardCardHeader d-flex justify-content-between">
            <span className="dashboardCardTitle">{chartTitle}</span>
            <div className="dashboardCardDots">
                <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="20" height="6" viewBox="0 0 20 6">
                    <defs>
                        <clipPath id="clip-Artboard_8">
                        <rect width="20" height="6"/>
                        </clipPath>
                    </defs>
                    <g id="Artboard_8" data-name="Artboard – 8" clip-path="url(#clip-Artboard_8)">
                        <rect width="20" height="6" fill="#fff"/>
                        <g id="Group_141" data-name="Group 141" transform="translate(-0.131 -0.023)">
                        <circle id="Ellipse_1" data-name="Ellipse 1" cx="2" cy="2" r="2" transform="translate(1.131 1.023)" fill="#878787"/>
                        <circle id="Ellipse_1-2" data-name="Ellipse 1" cx="2" cy="2" r="2" transform="translate(8.131 1.023)" fill="#878787"/>
                        <circle id="Ellipse_1-3" data-name="Ellipse 1" cx="2" cy="2" r="2" transform="translate(15.131 1.023)" fill="#878787"/>
                        </g>
                    </g>
                </svg>
            </div>
        </div>
    )
}