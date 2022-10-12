import firestore from '@react-native-firebase/firestore';
import async from 'async';
import { showMessage } from 'react-native-flash-message';

// -------------get list data----------------------
export const getListOfData = () => async (dispatch) => {
    var array = [];
    firestore()
        .collection('List')
        .onSnapshot(documentSnapshot => {
            array = [];

            async.forEach(
                documentSnapshot.docs,
                (item, Object_cb3) => {
                    let details = {
                        Id: item.data().Id ,
                        taskName: item.data().TaskName,
                        categoriesId: item.data().CategoriesId,
                        DocID: item.id,
                    };
                    array.push(details);

                    Object_cb3();

                },
                (userObjectErr) => {
                    dispatch({
                        type: 'SET_LIST',
                        payload: array,
                    });


                },
            );
        }).catch(function (error) {
        console.log(error);
    });

};
export const moduleVisible = (data) => async (dispatch) => {
            dispatch({
                type: 'SET_VISIBILITY',
                payload: data,
            });

};
export const setSelectedItem = (data) => async (dispatch) => {
    dispatch({
        type: 'SET_SELECTED_ITEM',
        payload: data,
    });

};

// -------------search list data----------------------
export const searchItems = (name) => async (dispatch) => {
    var array = [];
    firestore()
        .collection('List')
        // Filter results
        .where('TaskName', '==', name)
        .get()
        .then(querySnapshot => {
            array = [];

            async.forEach(
                querySnapshot.docs,
                (item, Object_cb3) => {
                    let details = {
                        Id: item.data().Id ,
                        taskName: item.data().TaskName,
                        categoriesId: item.data().CategoriesId,
                        DocID: item.id,
                    };
                    array.push(details);

                    Object_cb3();

                },
                (userObjectErr) => {
                    dispatch({
                        type: 'SET_SEARCH_ITEM',
                        payload: array,
                    });


                },
            );
        });

};
export const filterItems = (filter) => async (dispatch) => {
    var array = [];
    firestore()
        .collection('List')
        // Filter results
        .where('CategoriesId', '==', filter)
        .get()
        .then(querySnapshot => {
            array = [];

            async.forEach(
                querySnapshot.docs,
                (item, Object_cb3) => {
                    let details = {
                        Id: item.data().Id ,
                        taskName: item.data().TaskName,
                        categoriesId: item.data().CategoriesId,
                        DocID: item.id,
                    };
                    array.push(details);

                    Object_cb3();

                },
                (userObjectErr) => {
                    dispatch({
                        type: 'SET_SEARCH_ITEM',
                        payload: array,
                    });


                },
            );
        });

};

// -------------delete list data----------------------
export const deleteData = (id) => async (dispatch) => {
    firestore()
        .collection('List')
        .doc(id)
        .delete()
        .then(() => {
            showMessage({
                message: 'Item successfully delete from your List',
                type: 'info',
            });
        });

};

// -------------update list data----------------------
export const updateData = (id, name, cid) => async (dispatch) => {
    firestore()
        .collection('List')
        .doc(id)
        .update({
            TaskName: name,
            CategoriesId: cid
        })
        .then(() => {
            dispatch({
                type: 'SET_VISIBILITY',
                payload: false,
            });
            showMessage({
                message: 'Item successfully update to your List',
                type: 'info',
            });
        });

};

// -------------add list data----------------------
export const addList = (taskName, CID, length) => async (dispatch) => {
    firestore()
        .collection('List')
        .add({
            Id: length + 1,
            TaskName: taskName,
            CategoriesId: CID,
        })
        .then(() => {
            dispatch({
                type: 'SET_VISIBILITY',
                payload: false,
            });
            showMessage({
                message: 'Item successfully added to your List',
                type: 'info',
            });
        });

};
