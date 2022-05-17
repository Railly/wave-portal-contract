const main = async () => {
  const [owner, randomPerson] = await hre.ethers.getSigners();
  const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const waveContract = await waveContractFactory.deploy();
  await waveContract.deployed();

  console.log("Contract deployed to: ", waveContract.address);
  console.log("Contract deployed by: ", owner.address);

  let waveCount;

  let waveTxn = await waveContract.wave(owner.address);
  await waveTxn.wait();

  waveTxn = await waveContract.wave(owner.address);
  await waveTxn.wait();

  await waveContract.getTotalWavesByAddress(owner.address);

  waveTxn = await waveContract.connect(randomPerson).wave(randomPerson.address);
  await waveTxn.wait();

  waveTxn = await waveContract.connect(randomPerson).wave(randomPerson.address);
  await waveTxn.wait();

  waveTxn = await waveContract.connect(randomPerson).wave(randomPerson.address);
  await waveTxn.wait();

  await waveContract.getTotalWavesByAddress(randomPerson.address);

  waveCount = await waveContract.getTotalWaves();
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
