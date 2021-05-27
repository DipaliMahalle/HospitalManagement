import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,

    },
    title: {
        padding: "2px",
        textAlign: 'left',
        lineHeight: '0px',


    },
    paragraph: {
        backgroundcolor: "#f1f1f1",
        fontSize: "30",
        textAlign: 'left',
        lineHeight: '25px',
    },


}));

function HomeMain() {
    const classes = useStyles();
    return (<>

        <span className={classes.title}> Hospital Managment System</span>
        <span className={classes.paragraph}>
            Hospital is a health care institution providing patient treatment with specialized medical and nursing staff and medical equipment.
            The best-known type of hospital is the general hospital, which typically has an emergency department to treat urgent health problems ranging from fire and accident victims to a sudden illness.
           <br /> A district hospital typically is the major health care facility in its region, with many beds for intensive care and additional beds for patients who need long-term care.<br />
            Specialized hospitals include trauma centers, rehabilitation hospitals, children's hospitals, seniors' (geriatric) hospitals, and hospitals for dealing with specific medical needs such as psychiatric treatment (see psychiatric hospital) and certain disease categories. Specialized hospitals can help reduce health care costs compared to general hospitals.[2] Hospitals are classified as general, specialty, or government depending on the sources of income received
            hospital contains one or more wards that house hospital beds for inpatients. It may also have acute services such as an emergency department, operating theatre, and intensive care unit, as well as a range of medical specialty departments. <br />A well-equipped hospital may be classified as a trauma center. They may also have other services such a hospital pharmacy, radiology, pathology and medical laboratories. Some hospitals have outpatient departments such as behavioral health services, dentistry, and rehabilitation services.

A hospital may also have a department of nursing, headed by a chief nursing officer or director of nursing. This department is responsible for the administration of professional nursing practice, research, and policy for the hospital.<br />

Many units have both a nursing and a medical director that serve as administrators for their respective disciplines within that unit. For example, within an intensive care nursery, a medical director is responsible for physicians and medical care, while the nursing manager is responsible for all of the nurses and nursing care.<br />

Support units may include a medical records department, release of information department, technical support, clinical engineering, facilities management, plant operations, dining services, and security departments.<br />

It has all the ultra modern facilities including blood bank, cancer research centre etc. The hospital has more than 65 ICU beds with a central monitoring system. The hospital has a well equipped air-conditioned auditorium (with a capacity of 3000 people), advanced sound system and a sophisticated video projection system too.<br />
Hospitals have long existed in most countries. Developing countries, which contain a large proportion of the world’s population, generally do not have enough hospitals, equipment, and trained staff to handle the volume of persons who need care. Thus, people in these countries do not always receive the benefits of modern medicine, public health measures, or hospital care, and they generally have lower life expectancies.<br />


        </span>

    </>)
}
export default HomeMain
