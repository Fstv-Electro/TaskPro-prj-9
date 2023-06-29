import { Modal } from "components/modal/modal";
import { Field, Formik, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { ButtonClose } from 'components/modalBtnClose/ButtonClose';

// import { setFilter } from 'redux/dashboards/operations';

export const Filter = ({onClose}) => {
    const dispatch = useDispatch();

    const initialValues = {
        currentBg: 0,
        currentPrority: 'without priority',
    };

    return (
        <Modal onClose={onClose}>
            <ButtonClose onClose={onClose} />
            <h2>Filters</h2>
            <Formik
                initialValues={initialValues}
            >
                <Form autocomplete='off'>
                    {/* тут маж бути компонент backgroundAvatars */}
                    <div role="group" aria-labelledby="my-radio-group">
                        <label>
                            <Field type='radio' name='currentPrority' value='Without priority'/>
                        </label>
                        <label>
                            <Field type='radio' name='currentPrority' value='Low'/>
                        </label>
                        <label>
                            <Field type='radio' name='currentPrority' value='Medium'/>
                        </label>
                        <label>
                            <Field type='radio' name='currentPrority' value='High'/>
                        </label>
                    </div>
                </Form>
            </Formik>
        </Modal>
    )
}