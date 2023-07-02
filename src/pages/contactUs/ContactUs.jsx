import PagesBanner from "../shared/PagesBanner";
import img from "../../assets/contact/banner.jpg"
import Exprement from "../../component/Exprement";
import ContactForm from "../../component/ContractFrom";

const ContactUs = () => {
    return (
        <div>
            <PagesBanner image={img} title={'CONTACT US'} />
            <div>
                <div className="text-center py-8">
                    <h3> --- visit us ---</h3>
                    <h1 className="text-4xl font-bold "> OUR LOCATION</h1>
                </div>
                <Exprement />
                <div className="text-center py-8">
                    <h3> --- Send us a Messeage ---</h3>
                    <h1 className="text-4xl font-bold "> CONTRACT FROM</h1>
                </div>
                <ContactForm />
            </div>
        </div>
    );
};

export default ContactUs;