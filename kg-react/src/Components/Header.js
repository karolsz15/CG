import React from 'react';

const Header = props => (
    <div class="header2">
        <div class="header2_left">
            <div class="header2_title">{props.shortTitle}</div>
            <div class="header2_body">
                <div class="header2_body_title">
                    {props.longTitle}
                </div>
                <div class="header2_body_content">
                    {props.body}
                </div>
            </div>
            <div class="header2_button">
                <button class="button">LEARN MORE</button>
                <div class="header2_arrow"><img src="./assets/ico/arrow.svg" /></div>
            </div>
        </div>
        <div class="header2_linesanddots">
            <div class="header2_lines"><img src="./assets/assets/ico/lines.svg" /></div>
            <div class="header2_dots"><img src="./assets/assets/ico/ovals.svg" /></div>
        </div>
        <img src="./assets/assets/img/photo.jpg" class="header2_image" />
    </div>
);

export default Header;