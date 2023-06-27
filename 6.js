
// Pseudo code

function deliverPackage(locationGraph, address, package) {
    // check if the current node is the home we're looking for
    if (locationGraph.address === address) {
        locationGraph.mailbox.push(package);
        console.log(`Package delivered to ${address}!`);
        return;
    }
  
    // if not, iterate over the children of the current node
    for (let i = 0; i < locationGraph.children.length; i++) {
        deliverPackage(locationGraph.children[i], address, package);
    }
}

// Use it like this
deliverPackage(locationGraph, '123 Main St, Anytown, Anystate, USA', {id: 'package1', status: 'Delivery Pending'});